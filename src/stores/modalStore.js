import {
  decorate,
  observable,
  action,
  runInAction,
  computed,
  configure
} from "mobx";

configure({ enforceActions: true });

export default class ModalStore {
  modal = {
    show: false
  };

  showModal(body) {
    this.modal = {
      show: true
    };
    console.log(`Showing modal ${JSON.stringify(this.modal)}`);
  }

  closeModal() {
    console.log(this);
    this.modal = { show: false };
    console.log(`Closing modal ${JSON.stringify(this.modal)}`);
  }

  get isModalOpen() {
    return this.modal.show;
  }
}

decorate(ModalStore, {
  modal: observable,
  showModal: action,
  closeModal: action,
  isModalOpen: computed
});
