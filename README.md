# Useletric_challenge

## Descrição

Este projeto é um desafio de desenvolvimento proposto pela Useletric, que consiste na recriação de uma página de visualização de dados de dispositivos. O modelo foi construído utilizando o template do CoreUI versão 5. O objetivo é apresentar os dados de forma visual e totalmente responsiva, implementando gráficos e melhorando o aspecto visual.

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/hiagoCf19/Useletric_challenge.git
```

2. Navegue até o diretório do projeto:

```bash
cd Useletric_challenge/
```

## Como rodar o projeto

1. Inicie o servidor

```bash
npm start
```

2. Acesse `http://localhost:3000.`

## Considerações iniciais

Para este desafio, priorizei a consistência e a padronização visual. Por se tratar de um dashboard, busquei evitar elementos que se destacassem em meio aos dados relevantes para o usuário do sistema. Assim, optei por manter ao máximo o design system proposto pelos desenvolvedores do CoreUI. Foquei o desenvolvimento em melhorar a experiência do usuário, trazendo alterações pontuais no design para destacar informações importantes, facilitar a navegabilidade entre dispositivos na plataforma em qualquer tipo de tela, e implementar gráficos com informações relevantes.

## Melhorias implementadas

### Configurações

1. **Organização da Estrutura da Aplicação**:

   - Após baixar o template do CoreUI, criei uma pasta chamada devices-data para armazenar os dados dos dispositivos.
   - Adicionei os dois componentes disponíveis no repositório disponibilizado à pasta de componentes da aplicação.

2. **Refatoração inicial**:

   - Limpei a estrutura padrão do CoreUI, deixando apenas a base necessária para construir a tela de dispositivos proposta pelo desafio.

3. **Alteração no Componente `DeviceItem`**:

   - Modifiquei o componente `DeviceItem` para receber os dados via props, tornando-o reutilizável sem a necessidade de criar novos componentes para representar diferentes dispositivos.

4. **Simplificação do Arquivo de Rotas**:

   - Simplifiquei o arquivo de rotas utilizando um laço de repetição para mapear os dados disponibilizados e criar uma rota para cada dispositivo. Desta forma, pude utilizar o componente DeviceItem passando dados dinâmicos e renderizando diferentes dados apenas com uma estrutura.

5. **Remoção de Código Desnecessário**:
   - Removi tudo o que não estava sendo utilizado no código e adaptei as partes que apresentavam complexidade desnecessária para o contexto do desafio.

### Partes Visuais

1. **Agrupamento de conteúdo**

   - Alterei os elementos do layout para que se agrupassem por seções. Desta forma, foi possível criar uma padronização que consiste em dividir o layout em dois grupos: o grupo superior, onde são exibidos os cards, e o grupo inferior, onde são exibidos os gráficos.

2. **Navegação entre dispositivos**

- Mantive a sidebar nos desktops e fiz com que a navegação entre os dispositivos fosse feita a partir dela, tornando a transição entre os dispositivos mais simples e intuitiva.
- Em dispositivos menores, como tablets e celulares, a navegação é feita a partir do header do layout.

3. **Destacando informações importantes**

- Utilizei cores escuras em contraste com cores claras para melhorar a visualização dos dados exibidos no layout. Apliquei esta filosofia em todas as partes do layout onde são exibidos dados importantes para o usuário, tornando a leitura mais suave.

4. **Implementação de novos gráficos**

- Implementei um gráfico que permite acompanhar o tempo de máquina com base no horímetro.
- Alterei o arquivo `VariableChart` para que ele passasse a receber via props o tipo de gráfico que iria representar, permitindo reutilizar o componente para representar dois tipos diferentes de gráficos.

5. **Padronização do layout**

- Busquei padronizar o layout e evitar diferenças que pudessem tirar o foco do usuário das informações importantes, tornando o dashboard visualmente leve e prático de utilizar.

- Para destacar as informações importantes na tela de dispositivos, optei por mudar as bordas para a cor primária, assim há mais destaque em relação ao restante da composição do layout.

- Busquei padronizar o gráfico utilizando a cor primária que está presente em outras partes da aplicação.

- Padronizei o gráfico utilizando a cor primária presente em outras partes da aplicação.

6. **Distinção de informações**

- Adicionei uma seção responsável por dividir as informações dos cards dos gráficos, ajudando a manter a clareza do layout.

7- **Responsividade**

- Ao lidar com gráficos, é necessário que haja o melhor aproveitamento possível de espaço no layout. Com isso em mente, removi a sidebar em dispositivos menores e agrupei todos os elementos em colunas, permitindo que os gráficos exibidos ocupem sempre toda a largura do dispositivo.

- Ao remover a sidebar em dispositivos menores, optei por passar a navegação entre dispositivos para o header. Por se tratar de um ambiente limitado a apenas dois dispositivos, não houve poluição no layout.

- Alinhei as informações dos dispositivos, como nome e ID, junto aos inputs de seleção, destinando o restante do layout apenas para exibir as informações dos cards e gráficos.

## Considerações Finais

Para concluir este desafio, optei por não adicionar novas bibliotecas ao projeto. A ideia de trabalhar com as ferramentas disponibilizadas pelo CoreUI ajuda a manter a padronização e consistência visual. Realizei as alterações, estilizações e responsividade utilizando o Bootstrap, que já está presente no CoreUI.

### Motivações das Escolhas

1. **Manutenção da Padronização Visual**:

   - Utilizar apenas o CoreUI garante que a interface mantenha um padrão visual coerente, o que é fundamental em dashboards onde a clareza e a simplicidade são essenciais para a boa experiência do usuário.

2. **Design Limpo e Funcional**:

   - Adotei um design limpo, que se encaixa melhor no contexto da aplicação, evitando estilizações exageradas que pudessem descaracterizar o modelo original. Isso facilita a leitura e a interpretação dos dados pelos usuários.

3. **Melhoria da Experiência do Usuário**:

   - Foquei em melhorar a experiência do usuário com um design responsivo, garantindo que a navegação entre dispositivos seja intuitiva e consistente em diferentes tamanhos de tela. A navegação em desktops é feita pela sidebar, enquanto em dispositivos menores, como tablets e celulares, a navegação é realizada a partir do header.

4. **Implementação de Gráficos Relevantes**:
   - Implementei gráficos que permitem acompanhar informações cruciais, como o tempo de máquina baseado no horímetro, e utilizei componentes dinâmicos para garantir a reutilização e flexibilidade na representação dos dados.

### Justificativa para Não Adicionar Novas Bibliotecas

- **Consistência e Padrão**: Manter o uso do CoreUI assegura que a aplicação permaneça consistente com o design system proposto pelos desenvolvedores do CoreUI, evitando problemas de compatibilidade e estilos conflitantes.
- **Eficiência no Desenvolvimento**: Utilizar uma base de ferramentas consolidada como o CoreUI permite focar nas melhorias de navegação e visuais, sem a necessidade de aprender e integrar novas bibliotecas, o que poderia consumir mais tempo e esforço.
- **Experiência do Usuário**: A padronização e a simplicidade do CoreUI contribuem para uma melhor experiência do usuário, tornando a interface intuitiva e de fácil uso.

Com essas abordagens, consegui atender aos requisitos do desafio, criando uma página de visualização de dados eficiente, visualmente agradável e funcional.
