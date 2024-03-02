export class TareaItemList{
    private selected:boolean = false;

    constructor( public tarea: string){
        
    }
    
    isSelected():boolean{
        return this.selected;
    }

    setSelected(s: boolean){
        this.selected = s;
    }
}