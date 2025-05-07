# Testes da PokeAPI com Jest

Este projeto contém testes automatizados para três endpoints da [PokeAPI](https://pokeapi.co) utilizando Jest e Axios.

## Endpoints testados

1. `/pokemon/{id}` - Obter informações de um pokémon específico
2. `/type` - Listar tipos de pokémon
3. `/ability/{id}` - Buscar informações sobre habilidades de pokémon

## Como executar os testes

1. Instale as dependências:
   ```
   npm install
   ```

2. Execute os testes:
   ```
   npm test
   ```

## Tecnologias utilizadas

- Node.js
- Jest (framework de testes)
- Axios (cliente HTTP)