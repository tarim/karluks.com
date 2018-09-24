package models

/**
 * Card type
 **/
type Card struct {
	Name ValueType
	Suit SuitType
}
type SuitType int

const (
	Clubs    SuitType = 1
	Spades   SuitType = 2
	Hearts   SuitType = 3
	Diamonds SuitType = 4
)

func (suit SuitType) String() string {
	suits := [...]string{"Clubs", "Spades", "Hearts", "Diamonds"}
	return suits[suit-1]
}

type ValueType int

const (
	Ace   ValueType = 1
	Two   ValueType = 2
	Three ValueType = 3
	Four  ValueType = 4
	Five  ValueType = 5
	Six   ValueType = 6
	Seven ValueType = 7
	Eight ValueType = 8
	Nine  ValueType = 9
	Ten   ValueType = 10
	Jack  ValueType = 11
	Queen ValueType = 12
	King  ValueType = 13
)

func (value ValueType) String() string {
	values := [...]string{"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"}
	return values[value-1]
}

type Deck struct {
	Cards [52]Card
}

type ThreeCardsPlayer struct {
	Name  string
	Cards [3]Card
}
