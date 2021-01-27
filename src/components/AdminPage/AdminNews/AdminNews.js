import React from 'react'
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { updateState } from '../../../redux/actions/adminNewsAction';
import AdminLayout from '../AdminLayout/AdminLayout';

const AdminNews = (props) => {

   const changeModal = () => {
      props.updateState({modalOpen: !props.modalOpen})
   }

   return (
     <AdminLayout>
       <div className="admin-news">
         <div className="d-flex justify-content-between">
           <div>
             <h3>News</h3>
           </div>
           <div>
            <Button color="success" onClick={changeModal}>Qo'shish</Button>
           </div>
         </div>
         <Modal isOpen={props.modalOpen} toggle={changeModal}>
            <ModalBody>
            
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
         </Modal>
       </div>
     </AdminLayout>
   );
}
const mapStateToProps = (state) => {
   return {
      modalOpen: state.news.modalOpen
   }
}

export default connect(mapStateToProps, {updateState})(AdminNews)
