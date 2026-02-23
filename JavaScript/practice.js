const agents = ["A1", "A2", "A3"]; 
const leads = [ 
  { id: 1, name: "Lead 1" }, 
  { id: 2, name: "Lead 2" }, 
  { id: 3, name: "Lead 3" }, 
  { id: 4, name: "Lead 4" }, 
  { id: 5, name: "Lead 5" }, 
  { id: 6, name: "Lead 6" }, 
  { id: 7, name: "Lead 7" }, 
]; 

const fun = (leads,agents) => {

  const result = {}
  for(let i = 0; i<agents.length;i++){
    result[agents[i]] = []
  }
  for(let i=0;i<leads.length;i++){
    const agentIndex = i%agents.length;
    const agentName = agents[agentIndex]

    result[agentName].push(leads[i].id)
  }
  return result
}

console.log(fun(leads,agents))



 