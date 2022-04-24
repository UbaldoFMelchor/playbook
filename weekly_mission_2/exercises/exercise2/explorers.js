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

   explorers.forEach(exp => console.log(exp.name + " " + exp.stack))

   const listStacks = explorers.map ((exp) => exp.stack)
   console.log(listStacks)

   const stackJS = explorers.filter(exp => exp.stack.includes("js"))
   console.log(stackJS)

   const locationCDMX = explorers.find((exp) => exp.city == "CDMX")
   console.log("explorers que viven en CDMX: " +locationCDMX.name)

   const totalExCom = explorers.reduce((acc, exp) => acc + exp.exercises_completed, 0)
   console.log("total de ejercicios completados: " + totalExCom)