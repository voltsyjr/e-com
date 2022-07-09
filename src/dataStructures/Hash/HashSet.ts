
class HashSet<T> {
  private memory : {[key : string] : T} = {}; 

  set(key : string, value : T) : T {
    this.memory[key] = value; 
    return value; 
  }

  get(key : string) : T | null {
    if(this.memory[key] === undefined) return null; 
    else return this.memory[key]; 
  }

  size() : number {
    return Object.entries(this.memory).length; 
  }

  exists(key : string) : boolean {
    if(this.memory[key]!=undefined) return true; 
    else return false; 
  }

}


export default HashSet; 