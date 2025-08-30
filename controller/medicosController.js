import conexao from "../model/conexao";
import medicos from "../model/medicos";

class medicosController {

    static async adicionarMedicos(req, res) {
        try {
            const { nome, telefone, email, descricao } = req.body;
            const medico = new medicos(nome, telefone, email, descricao);
            const query = 'INSERT INTO listamedica (nome, email , telefone , descricao) VALUES (?, ?, ?, ?)';
            await conexao.query(query, [medico.nome, medico.email, medico.telefone, medico.descricao]);
            return res.status(201).json({ message: "Médico criado com sucesso" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async listarMedicos(req, res) {
        try {
            const query = "SELECT id, nome, telefone, descricao FROM listamedica";
            const [results] = await conexao.query(query);
            return res.status(200).json(results);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async atualizarMedicos(req, res) {
        try {
            const id = req.params.id;
            const {nome, telefone, email, descricao} = req.body;
            const query = 'UPDATE listamedica SET   nome= ?, telefone = ?, email =?, descricao = ? WHERE id =?';
            await conexao.query(query, [nome, telefone, email, descricao, id]);
            return res.status(200).json({message:"Médico atualizado com sucesso"});
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async deletarMedicos(req, res) {
        try {
            const id = req.params.id;
            const query = 'DELETE FROM listamedica WHERE id = ?'
            await conexao.query(query,[id]);
            return res.status(201).json({message:"Médico deletado com sucesso"});
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default medicosController;