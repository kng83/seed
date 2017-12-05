
github help
$ git config --global user.name "John Doe"
$ git config --global user.email
l johndoe@example.com
git config --list //generuje configa
$ git config --show-origin rerere.autoUpdate //konfig pokazuje
git add -h //krotki help np add config

$ git add LICENSE
$ git commit -m 'initial project version'
git clone bierze cala kopie danych co ma server dotyczaca dangit ego projektu
$ git clone https://github.com/libgit2/libgit2 mylibgit // git klonuje repozytorium i daje go do folderu mylibgit
git status //pokazuje liste plikow
git rm --cached FILENAME //aby usunac plik trzeba jeszcze dac litere -r te pliki sa git
git status --short // aby zobaczyc status zmniejszony

//***************************************.gitignore
$ cat .gitignore
*.[oa] // ignorowanie pliko .o, .a
*~
#- to jest komentarz w .gitignorre
Standard glob patterns work, and will be applied recursively throughout the entire working tree.
You can start patterns with a forward slash (/) to avoid recursivity.
You can end patterns with a forward slash (/) to specify a directory.
You can negate a pattern by starting it with an exclamation point (!).
# ignore all .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in the build/ directory
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory and any of its subdirectories
doc/**/*.pdf
//*************************************************************************************************************
git diff //pokazuje jakie sa roznice w zmianie pliku
git diff --staged //dokladne kroki zmian

*************Remove orgin *****************
To remove a remote repository you enter:
git remote rm origin
//To sa dane z mojego projektu
//dodanie statycznej strony do github
//musisz miec branch 'master' ; github posiada specjalna galaz 'gh-pages'
//to co dodasz bedzie https://<Username>.github.io/<RepoName>
//Dodajemy w githubie repozytorium i wazne by bylo publicze kopiujemy link
https://github.com/kng83/WebpackSample.git
//nalezy zrobic inicjacje git : git init
//nastepnie git add . (z kropka)
//git commit -m "initial commit"
//teraz dajemy nasze repozytorium
//git remote add origin https://github.com/kng83/WebpackSample.git //nowe
//git remote add origin git@github.com:kng83/WebpackSample.git //dla ssl
//git remote remove origin
//git remote add origin <link>
//git checkout -b gh-pages
//git subtree push --prefix dist origin gh-pages // dodaje do strony
//git status


https://kng83.github.io/WebpackSample/#/
skrytp do package.json aby zaladowac automatycznie
"deploy": "npm run build && git subtree push --prefix dist origin gh-pages"










