const PokeApiService = require('../src/services/pokeApiService');

describe('Testes do endpoint /pokemon', () => {
  const pokeApiService = new PokeApiService();

  it('deve retornar dados de um pokémon específico pelo ID', async () => {
    // Testando com o Pikachu (ID 25)
    const pokemon = await pokeApiService.getPokemon(25);
    
    // Verificações
    expect(pokemon).toBeDefined();
    expect(pokemon.id).toBe(25);
    expect(pokemon.name).toBe('pikachu');
    expect(pokemon.types).toBeInstanceOf(Array);
    expect(pokemon.abilities).toBeInstanceOf(Array);
    expect(pokemon.stats).toBeInstanceOf(Array);
  });

  it('deve retornar dados de um pokémon específico pelo nome', async () => {
    // Testando com o Charizard
    const pokemon = await pokeApiService.getPokemon('charizard');
    
    // Verificações
    expect(pokemon).toBeDefined();
    expect(pokemon.id).toBe(6);
    expect(pokemon.name).toBe('charizard');
    expect(pokemon.types).toBeInstanceOf(Array);
    expect(pokemon.types.some(type => type.type.name === 'fire')).toBe(true);
  });

  it('deve lançar erro para um pokémon inexistente', async () => {
    // Testando com um nome de pokémon inexistente
    await expect(pokeApiService.getPokemon('pokemon-inexistente-12345'))
      .rejects
      .toThrow();
  });
});