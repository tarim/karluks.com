package connection

import (
	"log"

	. "karluks.com/server/models"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type ConnDB struct {
	Server   string
	Database string
}

var db *mgo.Database

const (
	COLLECTION = "uyghur_name"
)

/**
 * Connect to Database
 */
func (conn *ConnDB) Connect() {
	session, err := mgo.Dial(conn.Server)
	if err != nil {
		log.Fatal(err)
	}
	db = session.DB(conn.Database)
}
/**
 * Get list of Uyghur name
 */
func (conn *ConnDB) FindAll() ([]UyghurName, error) {
	var uyghurNames []UyghurName
	err := db.C(COLLECTION).Find(bson.M{}).All(&uyghurNames)
	return uyghurNames, err
}
/**
 * search by id
 */
func (conn *ConnDB) FindByID(id string) (UyghurName, error) {
	var uyghurName UyghurName
	err := db.C(COLLECTION).FindId(bson.ObjectIdHex(id)).One(&uyghurName)
	return uyghurName, err
}

/**
 * search by name
 */
func (conn *ConnDB) FindByName(name string) (UyghurName, error) {
	var uyghurName UyghurName
	err := db.C(COLLECTION).Find(bson.M{"name":name}).One(&uyghurName)
	return uyghurName, err
}

/**
 * Add new name
 */
func (conn *ConnDB) Insert(uyghurName UyghurName) error {
	err := db.C(COLLECTION).Insert(&uyghurName)
	return err
}

/**
 * update uyghur name
 */
func (conn *ConnDB) Update(uyghurName UyghurName) error {
	err := db.C(COLLECTION).UpdateId(uyghurName.ID, &uyghurName)
	return err
}
