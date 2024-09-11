const { select, input, checkbox } = require('@inquirer/prompts')

let mensagem = "Bem vindo ao APP de Metas";
let meta = {
  value: "Tomar 3L de água por dia",
  checked: false
}
let metas = [meta]

const cadastrarMeta = async () => {
  const meta = await input({ message: "Digite a meta:"})
if(meta.length == 0){
  mensagem = "A meta não pode ser vazia"
  return
}

metas.push({
  value: meta, checked:false
})

mensagem = "Meta cadastrada com sucesso"

}

const listarMetas = async () => {
  
  const respostas = await checkbox({
    message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar essa etapa",
    choices: [...metas],
    instructions: false
  })

  metas.forEach((m) => {
    m.checked = false
  })
  
  if(respostas.length == 0){
    mensagem = "Nenhuma meta selecionada"
    return
  }

  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta
    })
    meta.checked = true
  })

  mensagem = "Meta(s) marcada(s) concluida(s)"
}

const metasRealizadas = async () => {
  const Realizadas = metas.filter((meta) => {
    return meta.checked
  })

  if(Realizadas.length == 0) {
    mensagem ='Não existem metas realizadas! :('
    return
  }

  await select ({
    message: "Metas realizadas:" + " " + Realizadas.length,
    choices: [...Realizadas]
  })
}
  const metasAbertas = async () => {
    const Abertas = metas.filter((meta) => {
      return meta.checked != true
      // Or ```return !meta.checked``` // 
    })

    if(Abertas.length == 0) {
      mensagem = "Não existem metas abertas! :)"
      return
    }

    await select({
      message: "Metas abertas:" + " " + Abertas.length,
      choices: [...Abertas]
    })
  }

  const deletarMetas = async () => {

    if(metas.length == 0) {
      mensagem = "Não existem metas";
      return
     }
     
    const metasDesmarcadas = metas.map((meta) => {
      return {value: meta.value, checked: false}
    })

    const itemsADeletar = await checkbox({
      message: "Selecione item para deletar",
      choices: [...metasDesmarcadas],
      instructions: false
    })
    
    itemsADeletar.forEach((item) => {
      metas = metas.filter((meta) => {
        return meta.value != item
      })
    })

    mensagem = "Meta(s) deletada(s) com sucesso!"
  }

  const mostrarMensagem = () => {
    console.clear();

    if(mensagem != "") {
      console.log(mensagem)
      console.log("")
      mensagem = ""
      
    }
  }

const start = async () => {
  while(true){

    mostrarMensagem()
    
    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "Cadastrar"  
        },
        {
          name: "Listar metas",
          value: "Listar"
        },
        {
          name: "Metas realizadas",
          value: "Realizadas"
        },
        {
          name: "Metas abertas",
          value: "Abertas"
        },
        {
          name: "Deletar metas",
          value: "Deletar"
        },
        {
          name: "Sair",
          value: "Sair"
        }
      ]
    })

    switch(opcao) {
      case "Cadastrar":
        await cadastrarMeta()
        break
      case "Listar":
        await listarMetas()
        break
      case "Realizadas":
          await metasRealizadas()
          break
      case "Abertas":
          await metasAbertas()
          break
      case "Deletar":
          await deletarMetas()
          break
      case "Sair":
        console.log("Até a proxima")
        return
        
    }
  }
}

start()