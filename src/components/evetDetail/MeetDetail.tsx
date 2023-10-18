import { Meet } from "../../types/meet";
import subjecImg from "../../assets/subject.png";
import calendarImg from "../../assets/calendar.svg";
import { useUser } from "@clerk/clerk-react";
import "./meetdetail.css";
import { singUpUserMeet } from "../../usecases/db/singUpUserMeet.usecase";
import { deleteMeet } from "../../usecases/db/deleteMeet.usecase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
interface Props {
  meet: Meet;
}

const EvetDetail = ({ meet }: Props) => {
  const { user } = useUser();
  const navegate = useNavigate();
  const deleteMeetWithConfirmation = () => {
    const confirmDelete = () => {
      deleteMeet(meet.id);
      toast.success("Evento eliminado");
      toast.dismiss();
      navegate(`/meets/user/${meet.user_id}`);
    };

    const cancelDelete = () => {
      toast.dismiss();
    };

    toast.warning(
      <div>
        <p>¿Estás seguro que deseas continuar?</p>
        <button onClick={confirmDelete}>Confirmar</button>
        <button className="ml-3" onClick={cancelDelete}>
          Cancelar
        </button>
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  return (
    meet && (
      <section className="meetDetail">
        <ul>
          <li>{meet.title}</li>
          <li>
            <img src={meet.photo} alt="" />
          </li>
          <li>{meet.description}</li>
        </ul>
        <ul>
          <li>
            <img className="icondetail" src={subjecImg} alt="" />
            <p>{meet.subject}</p>
          </li>
          <li>{meet.ubication}</li>
          <li>
            <img className="icondetail" src={calendarImg} alt="" />
            {meet.date}
          </li>
        </ul>
        {user ? (
          user.id === meet.user_id ? (
            <ul className="optionsUl">
              <li>
                <button onClick={() => navegate(`/meet/edit/${meet.id}`)}>
                  Editar Evento
                </button>
              </li>
              <li>
                <button onClick={deleteMeetWithConfirmation}>Eliminar</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <button
                  className="singUpButton"
                  onClick={() =>
                    singUpUserMeet(user.id, user.imageUrl, meet.id)
                  }
                >
                  Unirme!!
                </button>
              </li>
            </ul>
          )
        ) : (
          ""
        )}
      </section>
    )
  );
};

export default EvetDetail;
