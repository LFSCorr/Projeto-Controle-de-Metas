const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
  value: "Tomar 3L de água por dia",
  checked: false
}
let metas = [meta]

const cadastrarMeta = async () => {
  const meta = await input({ message: "Digite a meta:"})
if(meta.length == 0){
  console.log("A meta não pode ser vazia")
  return
}

metas.push({
  value: meta, checked:false
})

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
    console.log("Nenhuma meta selecionada")
    return
  }

  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta
    })
    meta.checked = true
  })

  console.log("Meta(s) marcada(s) concluida(s)")
}

const metasRealizadas = async () => {
  const Realizadas = metas.filter((meta) => {
    return meta.checked
  })

  if(Realizadas.length == 0) {
    console.log('Não existem metas realizadas! :(')
    return
  }

  await select ({
    message: "Metas realizadas" + " " + Realizadas.length,
    choices: [...Realizadas]
  })
}
  const metasAbertas = async () => {
    const Abertas = metas.filter((meta) => {
      return meta.checked != true
      // Or ```return !meta.checked``` // 
    })

    if(Abertas.length == 0) {
      console.log("Não existem metas abertas! :)")
    }

    await select({
      message: "Metas abertas" + " " + Abertas.length,
      choices: [...Abertas]
    })
  }

const start = async () => {
  while(true){
    
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
          name: "Metas Realizadas",
          value: "Realizadas"
        },
        {
          name: "Metas Abertas",
          value: "Abertas"
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
        console.log(metas)
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
      case "Sair":
        console.log("Até a proxima")
        return
        
    }
  }
}

start()