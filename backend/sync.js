const Leitor = require('./models/Leitor')
const conn = require('./db/conn')

async function SyncDataBase() {
    try {
        await conn.sync({ force: true })
        console.log(`Sincronizando as tabelas`)
    } catch (err) {
        console.error(`Erro ao sincronizar as tabelas`, err)
    } finally {
        await conn.close()
        console.log('Fechando a conexão com o Banco de dados')
    }
}
SyncDataBase()