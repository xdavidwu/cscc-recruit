const groupingUser = users => {
  /* please implement here */
	tmp={};
	l=users.length;
	for(i=0;i<l;i++){
		if(tmp[users[i].role]==undefined){
			tmp[users[i].role]=[users[i].name];
		}
		else{
			tmp[users[i].role].push(users[i].name);
		}
		m=users[i].groups.length;
		for(j=0;j<m;j++){
			if(tmp[users[i].groups[j]]==undefined){
				tmp[users[i].groups[j]]=[users[i].name];
			}
			else{
				tmp[users[i].groups[j]].push(users[i].name);
			}
		}
	}
	return tmp;
};

const sampleInput = [
  {
    name: "blzhuang",
    role: "Master",
    groups: ["wwwta", "linuxta", "vmta", "leaderta"]
  },
  {
    name: "yoychen",
    role: "Master",
    groups: ["wwwta", "linuxta"]
  },
  {
    name: "calee",
    role: "Bachelor",
    groups: ["netta", "vmta", "linuxta", "leaderta"]
  }
];

const sampleOutput = groupingUser(sampleInput);
console.log(sampleOutput);
