package models

import (
	"gopkg.in/mgo.v2/bson"
)

/**
* Uyghur Name struct
*/
type UyghurName struct {
	ID          bson.ObjectId `bson:"_id" json:"id"`
	Name        string        `bson:"name" json:"name"`
	FamilyName  bool          `bson:"family_name" json:"family_name"`
	Gender      string		  `bson:"gender" json:"gender"`
	Resource    string        `bson:"resource" json:"resource"`
	Description string        `bson:"description" json:"description"`
}

/*
Gender enum list
*/
type GenderEnum int

const (
	Male   GenderEnum = 0
	Female GenderEnum = 1
	Both   GenderEnum = 2
)
