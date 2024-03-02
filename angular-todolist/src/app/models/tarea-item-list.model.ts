export class TareaItemList{
    private selected:boolean = false;
    public esp:string[];

    constructor( public tarea: string){
        this.esp = ['especificacion 1', 'especificacion 2'];
    }

    isSelected():boolean{
        return this.selected;
    }

    setSelected(s: boolean){
        this.selected = s;
    }
}