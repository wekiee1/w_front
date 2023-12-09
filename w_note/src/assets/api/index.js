import { get, post } from '../../utils/HttpRequest'

const noteApi = {
  saveNoteContent(param) {
    return get("/noteContent/listMapsPage.action")(param)
  }
}; 

export default { noteApi };
