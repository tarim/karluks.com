package main

import (
	"fmt"
	"math/rand"

	. "./models"
)

var deck Deck

func init() {
	fmt.Println("Start to create a deck...")
	suits := [4]SuitType{Clubs, Spades, Hearts, Diamonds}
	//fmt.Println(suits)
	values := [13]ValueType{Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace}
	//fmt.Println(values)
	k := 0
	for i := 0; i < 4; i++ {
		for j := 0; j < 13; j++ {
			deck.Cards[k].Suit = suits[i]
			deck.Cards[k].Name = values[j]
			//fmt.Println("Current Card is %s, %s = %s", suits[i], cardValues[j], deck.Cards[k])
			k++
		}
	}
	//fmt.Println("total cards are %d", k)
	//fmt.Println(deck)
}

/**
 * Suffle deck
 */
func Suffle(deck Deck) Deck {
	//fmt.Println("start to suffle %s", deck)
	//i:
	return deck
}

func getThreeCards(players ThreeCardsPlayer, player int) ThreeCardsPlayer {
	for i := 0; i < 3; i++ {
		players.Cards[i] = deck.Cards[(player-1)*3+i]
	}
	return players
}

func main() {
	//	fmt.Println(deck)
	//for t := 0; t < 20; t++ {
	for k := 0; k < 4+rand.Intn(5); k++ {
		rand.Shuffle(len(deck.Cards), func(i, j int) {
			deck.Cards[i], deck.Cards[j] = deck.Cards[j], deck.Cards[i]
		})
	}
	fmt.Println(deck)
	p1 := ThreeCardsPlayer{Name: "Nur"}
	p1 = getThreeCards(p1, 1)
	fmt.Println(p1)

	p2 := ThreeCardsPlayer{Name: "Bilge"}
	p2 = getThreeCards(p2, 2)
	fmt.Println(p2)

	p3 := ThreeCardsPlayer{Name: "Ozge"}
	p3 = getThreeCards(p3, 3)
	fmt.Println(p3)
	//}

}
