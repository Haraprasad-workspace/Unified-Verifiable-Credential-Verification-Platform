class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){

        //trie always have a root node which is usually a empty prefix

        let currentNode = this.root;

        //start iterating through each character of the word

        for(let char of word){

            //if the character is not present in the children node , then create a new node for that character

            if(!currentNode.children[char]){
                currentNode.children[char] = new TrieNode();

            }

            //move down to the child node 

            currentNode = currentNode.children[char];
        }
        //this marks as the end of iteration of the word 

        currentNode.isEndOfWord = true;

        //this marks the ends of the fingerprint 
    }

    //this is used to search for the fingerprints in the given text

    search(text){
        //start iterating throught each character of the text 
        for(let i=0 ; i<text.length ; i++){
            //for each character start from the root node and go on matching the characters
            let currentNode = this.root;
            let matchedfingerprint = '';

            for(let j=i ; j<text.length ; j++){
                const char = text[j];
                if(!currentNode.children[char]){ //if there's no edge for this char, stop inner loop
                    break;
                }
                currentNode = currentNode.children[char]; //move down to the child node
                matchedfingerprint += char; //append char to the matched string


                if(currentNode.isEndOfWord){
                    return matchedfingerprint;
                }
            }
        }
        return null; //no fingerprint found in the entire text;
    }
}

//creating a new Trie instance

const credentialtrie = new Trie();

//inserting the specific fingerprints for w3c verifiable credentials and SD-jWT

//w3c vc fingerprints 

credentialtrie.insert("verifiableCredential");
credentialtrie.insert("@context");
credentialtrie.insert("credentialSubject");
credentialtrie.insert("https://www.w3.org/2018/credentials/v1");
//SD-JWT fingerprints

credentialtrie.insert("sd-jwt");
credentialtrie.insert("_sd");

module.exports = credentialTrie;