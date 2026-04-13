// ********************
/*
┌─────────────────────────────────────────────────────────────────────────┐
│                                 WINDOW                                  │
└─────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                                DOCUMENT                                  │
└─────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                                  HTML                                    │
└─────────────────────────────────────────────────────────────────────────┘
                                      │
                    ┌─────────────────┴─────────────────┐
                    ▼                                   ▼
        ┌────────────────────┐               ┌────────────────────┐
        │        HEAD        │               │        BODY        │
        └────────────────────┘               └────────────────────┘
                    │                                   │
          ┌─────────┴─────────┐                         ▼
          ▼                   ▼               ┌────────────────────┐
    ┌───────────┐         ┌───────────┐        │        div         │
    │   title   │         │   meta    │        └────────────────────┘
    └───────────┘         └───────────┘                 │
          │                   │               ┌─────────┼─────────┐
          ▼                   ▼               ▼         ▼         ▼
    ┌───────────┐         ┌───────────┐   ┌───────┐ ┌───────┐ ┌───────┐
    │ text node │         │ attributes│   │attrs  │ │  h1   │ │ text  │
    └───────────┘         └───────────┘   └───────┘ └───────┘ └───────┘
                                                          │
                                                          ▼
                                                    ┌───────────┐
                                                    │ text node │
                                                    └───────────┘
*/

// innerText ->  will only show what is visible on the page. 
// textContent -> will show all the texts even if it's hidden 
//                due to any CSS property being applied to the text.
// innerHTML   ->  HTML + text (includes tags)

/* querySelector returns the first matching element, 
while querySelectorAll returns all matching elements as a NodeList. 
If no match is found, querySelector returns null, 
but querySelectorAll returns an empty NodeList  */

/* getElementById vs getElementsByClassName vs getElementsByTagName
All three methods are used to select DOM elements. 
getElementById returns a single element directly because IDs are unique. 

getElementsByClassName and getElementsByTagName both 
return live HTMLCollections containing multiple elements. 

The difference is that getElementsByClassName selects elements by their class attribute, 
while getElementsByTagName selects elements by their tag name like div, p, or button
*/