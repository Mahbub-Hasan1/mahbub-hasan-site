import React from 'react';
import Modal from 'react-modal';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import './PopupCard.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const PopupCard = (props) => {
  const { project } = props;
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="d-flex">
        <LinkIcon onClick={openModal} className="icon" />
        <h5 className="card-title project-name" onClick={openModal}>{project.name}</h5>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <button onClick={closeModal} className="close-btn" >❌close</button>

        <a className="link-icon" href="https://creative-agency-32149.web.app/" target="_blank" rel="noopener noreferrer">
          <h2 ref={_subtitle => (subtitle = _subtitle)}>
            {project.name}
            <LinkIcon className="" />
          </h2>
        </a>

        <div className="row d-flex">

          <div>
            {
              project.liveWeb ?
                <>
                  <a className="link-icon" href={project.liveWeb} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="" />
                    Live Website
                </a><br />
                </>
                :
                ''
            }
            {
              project.liveApi ?
                <>
                  <a className="link-icon" href={project.liveApi} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="" />
                    Live API Server
                </a><br />
                </>
                :
                ''
            }
          </div>
          <div className="repoStyle">
            {
              project.FrontEndRepo ?
                <>
                  <a className="link-icon" href={project.FrontEndRepo} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon  />
                    Front-end Repository
                </a><br />
                </>
                :
                ''
            }
            {
              project.BackEndRepo ?
                <>
                  <a className="link-icon" href={project.BackEndRepo} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                    Back-end Repository
                </a><br />
                </>
                :
                ''
            }
          </div>

        </div><br/>

        <div className="tex-bold">
          <p>{project.DB1}</p>
          <p>{project.DB2}</p>
          <p>{project.DB3}</p>
          <p>{project.DB4}</p>
        </div>
      </Modal>
    </div>
  );
};

export default PopupCard;