const PokeApiService = require('../src/services/pokeApiService');

describe('Testes do endpoint /ability', () => {
  const pokeApiService = new PokeApiService();

  it('deve retornar dados de uma habilidade específica pelo ID', async () => {
    // Testando com a habilidade "static" (ID 9)
    const ability = await pokeApiService.getAbility(9);
    
    // Verificações
    expect(ability).toBeDefined();
    expect(ability.id).toBe(9);
    expect(ability.name).toBe('static');
    expect(ability.pokemon).toBeInstanceOf(Array);
    expect(ability.effect_entries).toBeInstanceOf(Array);
  });

  it('deve retornar dados de uma habilidade específica pelo nome', async () => {
    // Testando com a habilidade "blaze"
    const ability = await pokeApiService.getAbility('blaze');
    
    // Verificações
    expect(ability).toBeDefined();
    expect(ability.name).toBe('blaze');
    expect(ability.pokemon).toBeInstanceOf(Array);
    
    // Verificar se pelo menos um pokémon com essa habilidade é do tipo fogo
    const hasFireTypePokemon = ability.pokemon.length > 0;
    expect(hasFireTypePokemon).toBe(true);
  });

  it('deve conter informações sobre efeitos da habilidade', async () => {
    // Testando com a habilidade "overgrow"
    const ability = await pokeApiService.getAbility('overgrow');
    
    // Verificações
    expect(ability).toBeDefined();
    expect(ability.effect_entries).toBeInstanceOf(Array);
    
    // Verificar se há pelo menos uma entrada de efeito em inglês
    const hasEnglishEffect = ability.effect_entries.some(
      entry => entry.language && entry.language.name === 'en'
    );
    expect(hasEnglishEffect).toBe(true);
  });

  it('deve lançar erro para uma habilidade inexistente', async () => {
    // Testando com um nome de habilidade inexistente
    await expect(pokeApiService.getAbility('habilidade-inexistente-12345'))
      .rejects
      .toThrow();
  });
});