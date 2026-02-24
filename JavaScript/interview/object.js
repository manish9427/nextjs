const agents = ["A1", "A2", "A3"]; 
const leads = [ 
  { id: 1, city: "NYC" }, 
  { id: 2, city: "LA" }, 
  { id: 3, city: "NYC" }, 
  { id: 1, city: "LA" }, 
  { id: 2, city: "NYC" }, 
  { id: 3, city: "LA" }, 
  { id: 1, city: "NYC" }, 
];

const funCity = (leads)=>{
  const result = {}

  for(let i=0;i<leads.length;i++){
    let lead = leads[i]
    let city = lead.city
    if(!result[city]){
      result[city] = []
    }
    result[city].push(leads[i])
  }
  return result
}

console.log(funCity(leads))

const fun = (agents,leads) => {
  const result = {}
  for(let i=0;i<agents.length;i++){
    result[agents[i]]=[]
  }
  for(let i=0;i<leads.length;i++){
    let agentsIndex = i%agents.length
    let agentsName = agents[agentsIndex]
    result[agentsName].push(leads[i].id)
  }
  return result
}

console.log(fun(agents,leads))

 