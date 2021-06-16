[TypeScriptの組み込み型関数 Recordの使いどころ](https://qiita.com/kei-nakoshi/items/6b1ed11741b90e71e1bd)  

これがもっときれいに書けるんじゃないかと思ってやってみた
```js
const usersAgeFn1 = (users:{[key:string] : {age:number}}) => {
    let ages : {[key:string]:number} = {}
    for( let [key,value] of Object.entries(users) ){
        ages[key] = value.age
    }
    return ages
}

const usersAge1 = usersAgeFn1(users)
```