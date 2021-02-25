export default class View {
    _data
    render(data){
        if(!data) return;
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }
    _clear(){
        this._parentEl.innerHTML = ''
    }
}