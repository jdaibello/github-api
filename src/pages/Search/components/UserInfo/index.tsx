import React from 'react';
import './styles.css';

function UserInfo() {
  return (
    <div className="user-info-container">
      <div className="user-info">
        <div className="user-info-avatar-content">
          <img
            className="user-info-avatar"
            src="https://avatars2.githubusercontent.com/u/13897257?v=4"
            alt="Avatar do usuário"
          />
          <button className="btn btn-primary">
            Ver perfil
          </button>
        </div>
        <div className="user-info-details">
          <div className="badges-content">
            <span className="badge-item user-info-item">
              Repositórios públicos: 
            </span>
            <span className="badge-item user-info-item">
              Seguidores: 
            </span>
            <span className="badge-item user-info-item">
              Seguindo: 
            </span>
          </div>
          <div className="user-info-content user-info-item">
            <h3 className="user-info-title">Informações</h3>
            <div className="user-info-details-item user-info-item">
              <strong>Empresa:</strong> 
            </div>
            <div className="user-info-details-item user-info-item">
              <strong>Website/Blog:</strong> 
            </div>
            <div className="user-info-details-item user-info-item">
              <strong>Localidade:</strong> 
            </div>
            <div className="user-info-details-item user-info-item">
              <strong>Membro desde:</strong> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;