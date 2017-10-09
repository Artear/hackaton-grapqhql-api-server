# Hackaton - GraphQL API Server
                                                                         
<pre>
 __    __                   __                  __                       
/  |  /  |                 /  |                /  |                      
$$ |  $$ | ______   _______$$ |   __  ______  _$$ |_    ______  _______  
$$ |__$$ |/      \ /       $$ |  /  |/      \/ $$   |  /      \/       \ 
$$    $$ |$$$$$$  /$$$$$$$/$$ |_/$$/ $$$$$$  $$$$$$/  /$$$$$$  $$$$$$$  |
$$$$$$$$ |/    $$ $$ |     $$   $$<  /    $$ | $$ | __$$ |  $$ $$ |  $$ |
$$ |  $$ /$$$$$$$ $$ \_____$$$$$$  \/$$$$$$$ | $$ |/  $$ \__$$ $$ |  $$ |
$$ |  $$ $$    $$ $$       $$ | $$  $$    $$ | $$  $$/$$    $$/$$ |  $$ |
$$/   $$/ $$$$$$$/ $$$$$$$/$$/   $$/ $$$$$$$/   $$$$/  $$$$$$/ $$/   $$/ 
</pre>
                                                                         


## Server

```
https://cover-graphql-server.herokuapp.com/graphql
```

### Get Articles without filter

```
{
  articles {
    articleId
    title {
      main
      social
      headline
    }
    uri
  } 
}
```

### Get Articles with filter

```
{
  articles(ids:["=11111", "=222222"]) {
    articleId
    title {
      main
      social
      headline
    }
    uri
  } 
}
```


### Get Medias

```
{
  medias(ids:["TN-image-1088015", "TN-image-1088016"]) {
    mediaId
    source {
      type
      value
      origin
    }
    metadata {
      createdISO
    }
  }
}
```

## Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/19291876?v=3&s=100" width="100px;"/><br /><sub>Alejo Daraio</sub>](https://github.com/alejodaraio) | [<img src="https://avatars2.githubusercontent.com/u/1482009?v=4&s=100" width="100px;"/><br /><sub>Jose Sagreso</sub>](https://github.com/jsagredo-scott) | [<img src="https://avatars0.githubusercontent.com/u/1864435?v=4&s=100" width="100px;"/><br /><sub>Leandro Almeida</sub>](https://github.com/leanazulyoro) | [<img src="https://avatars3.githubusercontent.com/u/1032786?v=4&s=100" width="100px;"/><br /><sub>Alejandro Cena</sub>](https://github.com/alejandrocena) | [<img src="https://avatars0.githubusercontent.com/u/21956382?v=4&s=100" width="100px;"/><br /><sub>Brian Novillo</sub>](https://github.com/briannovillo) | [<img src="https://avatars1.githubusercontent.com/u/5498252?v=4&s=100" width="100px;"/><br /><sub>Gabrial Fusca</sub>](https://github.com/gfusca) | [<img src="https://avatars2.githubusercontent.com/u/2520795?v=4&s=100" width="100px;"/><br /><sub>David Tolchinsky</sub>](https://github.com/daver1419) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/11295433?v=4&s=100" width="100px;"/><br /><sub>Sergio Bañares</sub>](https://github.com/sergiobanares) | [<img src="https://avatars0.githubusercontent.com/u/13383009?v=4&s=100" width="100px;"/><br /><sub>Mauro</sub>](https://github.com/Maro90)
<!-- ALL-CONTRIBUTORS-LIST:END -->
