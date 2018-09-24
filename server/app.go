package main

import (
	auth "karluks.com/server/security"
	. "karluks.com/server/connection"
	. "karluks.com/server/models"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"gopkg.in/mgo.v2/bson"
)

var conn = ConnDB{}

/**
 * Get Uyghur Names
 */
func UyghurNames(w http.ResponseWriter, r *http.Request) {
	uyghurNames, err := conn.FindAll()
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
	respondWithJSON(w, http.StatusOK, uyghurNames)
}

/**
 * Search Uyghur Name
 */
func SearchUyghurName(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	uyghurName, err := conn.FindByName(params["name"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid Uyghur Name")
		return
	}
	respondWithJSON(w, http.StatusOK, uyghurName)
}

/**
 * Search Uyghur name by id
 */
func SearchUyghurNameByID(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	uyghurName, err := conn.FindByID(params["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid Uyghur Name ID")
		return
	}
	respondWithJSON(w, http.StatusOK, uyghurName)
}

/**
 * Add Uyghur Name
 */
func AddUyghurName(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	var uyghurName UyghurName
	if err := json.NewDecoder(r.Body).Decode(&uyghurName); err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid request")
		return
	}

	uyghurName.ID = bson.NewObjectId()
	if err := conn.Insert(uyghurName); err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusCreated, uyghurName)
}

/**
 * Update Uyghur Name
 */
func UpdateUyghurName(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "not implemented yet !")
}

/**
 * Delete Uyghur Name
 */
func DeleteUyghurName(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "not implemented yet !")
}

/**
 * Write error json result
 */
func respondWithError(w http.ResponseWriter, code int, msg string) {
	respondWithJSON(w, code, map[string]string{"error": msg})
}

/**
 * Write Json Respond result
 */
func respondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
	response, _ := json.Marshal(payload)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(response)
}
/**
 * Use oAuth2 to authenticate user
 */
func Authentication(w http.ResponseWriter, r *http.Request){
	auth.Token()
}
func init() {
	
	//conn.Server = "127.0.0.1:27017"
	//conn.Database = "UyghurNameDB"
//	fmt.Printf("Connecting to database %s:%s...", conn.Server, conn.Database)
//	conn.Connect()
}
func main() {
	listenPort := "3002"
	apiVersion := "/v1"
	r := mux.NewRouter()
	r.HandleFunc(fmt.Sprintf("%s/token", apiVersion), Authentication).Methods("GET")
	r.HandleFunc(fmt.Sprintf("%s/names", apiVersion), UyghurNames).Methods("GET")
	r.HandleFunc(fmt.Sprintf("%s/names", apiVersion), AddUyghurName).Methods("POST")
	r.HandleFunc(fmt.Sprintf("%s/names", apiVersion), UpdateUyghurName).Methods("PUT")
	r.HandleFunc(fmt.Sprintf("%s/names", apiVersion), DeleteUyghurName).Methods("DELETE")
	r.HandleFunc(fmt.Sprintf("%s/names/{id}", apiVersion), SearchUyghurNameByID).Methods("GET")
	r.HandleFunc(fmt.Sprintf("%s/names/name/{name}", apiVersion), SearchUyghurName).Methods("GET")
	if err := http.ListenAndServe(":"+listenPort, r); err != nil {
		log.Fatal(err)
	}
}
