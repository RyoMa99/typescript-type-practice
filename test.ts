interface IUser {
  [key: string]: {
    name: string,
    age: number
  }
}

const users: IUser = {
    "suzuki" : {
        age : 26,
        name : "suzuki"
    },
    "sato" : {
        name : "sato",
        age : 32
    },
    "takahashi" : {
        name : "takahashi",
        age : 40,
    },
    "tanaka" : {
        name : "tanaka",
        age : 25,
    }
}

const usersAgeFn = (users: IUser): { [key in keyof IUser]: number } => {
  let usersAge: { [key in keyof IUser]: number } = {}
  for (const [key,obj] of Object.entries(users)){
    usersAge[key] = obj.age
  }
  return usersAge
}

const usersAge1 = usersAgeFn(users)

console.log(usersAge1)