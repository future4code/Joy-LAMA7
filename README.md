# <p align = "center"> ✨ Labenu Music Awards ✨ </p> 

<p align = "center"> Welcome to LamaSystem,  
API for organizations of bands and shows! </p>

<br/>

<div align = "center">
<img src="https://cdn-icons-png.flaticon.com/512/2741/2741227.png"  width="150" height="150" /> 
</div>

<br/>

<div align = "center"> <strong> Pair Programming </strong> </div> 
</BR>
  <div align = "center">

      👻Danielle de Oliveira Kensy👻 
      👾Luciano Ribeiro dos Santos👾
</div>
</BR>

___

## 🔧 Using the following technologies:
- Knex
- MySql
- Typescript
- Express
- Node.js
___

In the document below you can find all the instructions about how to use the `6` methods:

___
## <font color="pink">Get Shows By Date</font>
Using the path /show
And the login token in the header authorization

You will have the return of an array with all the shows for the date of your choice:
~~~
{
  "shows": [
    {
      "name": "ACDC",
      "music_genre": "Rock"
    }
  ]
}
~~~
___

___
## <font color="pink">Get Band Details</font>
Using the path /band/:bandId

You will have the return of an array with all the details about the band of your choice:
~~~

[
  {
    "id": "a0a9b2a0-cc24-41ff-a6ae-5daffee6271c",
    "name": "ACDC",
    "music_genre": "Rock",
    "responsible": "Brian Johnson"
  }
]
~~~
___

## <font color="pink">User Register</font>
Using the path /user

And passing the following body:
~~~
{
    "name": "Astrodev",
    "email": "astrodev@email.com",
    "password": "#AsdF12",
    "role": [ADMIN OR NORMAL]
}
~~~
You will get this return:
~~~
Registered User✅ and [Token]
~~~
___

___

## <font color="pink">User Login</font>
Using the path /user/login

And passing the following body:
~~~
{
    "email": "astrodev@email.com", 
    "password": "#AsdF12"
}
~~~
You will get this return:
~~~
[Token]
~~~
___

## <font color="pink">Register Band</font>
Using the path /band
And the header authorization token

And passing the following body:
~~~
{
    "name": "ACDC",
    "musicGenre": "Rock",
    "responsible": "Brian Johnson"
}

~~~
You will get this return:
~~~
Registered Band✅
~~~
___
## <font color="pink">Register Show</font>
Using the path /show
And the header authorization token

And passing the following body:
~~~
{
    "weekDay":"Sexta",
    "startTime": 8,
    "endTime": 22,
    "bandId":"a0a9b2a0-cc24-41ff-a6ae-5daffee6271c"
}

~~~
You will get this return:
~~~
Registered Show✅
~~~
___