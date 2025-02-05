const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log("1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
   console.log("2. Imprime el stack de cada explorer, usa FOR EACH")
   explorers.forEach(exp => console.log(exp.name + " " + exp.stack))

   console.log("3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
   const listStacks = explorers.map ((exp) => exp.stack)
   console.log(listStacks)

   console.log("4. Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
   const stackJS = explorers.filter(exp => exp.stack.includes("js"))
   console.log(stackJS)

   console.log("5. Busca el primer explorer que sea de la CDMX, usa FIND")
   const locationCDMX = explorers.find((exp) => exp.city == "CDMX")
   console.log("explorers que viven en CDMX: " +locationCDMX.name)

   console.log("6. Obtén la suma de todos los exercises_completed, usa REDUCE")
   const totalExCom = explorers.reduce((acc, exp) => acc + exp.exercises_completed, 0)
   console.log("total de ejercicios completados: " + totalExCom)

   console.log("7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
   const front = explorers.some(exp => exp.missions.frontend.exercisesFinished === true)
   console.log(front)

   console.log("8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
   const onboard = explorers.every((exp) => exp.missions.onboarding.isFinished === true)
   console.log(onboard)