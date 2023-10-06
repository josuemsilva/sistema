import "./erase.css";
import { FiX, FiArrowLeft } from "react-icons/fi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Erase({ conteudo, close }) {
  const { chamados, setChamados } = useContext(AuthContext);

  async function handleErase() {
    const chamadoRef = doc(db, "chamados", conteudo.id);
    await deleteDoc(chamadoRef);
    await setChamados((prevChamados) =>
      prevChamados.filter((chamado) => chamado.id !== conteudo.id)
    );
    close();
  }

  return (
    <div className="erase-screen">
      <div className="container">
        <button className="close" onClick={close}>
          <FiArrowLeft size={25} color="#181c2e" />
          Voltar
        </button>
        <main>
          <h2>Tem certeza de que quer excluir este chamado?</h2>
          <button onClick={handleErase} className="erase-btn">
            <FiX size={25} color="#FFF" />
            Sim
          </button>
        </main>
      </div>
    </div>
  );
}
