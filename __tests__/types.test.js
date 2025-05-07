const PokeApiService = require('../src/services/pokeApiService');

describe('Testes do endpoint /type', () => {
  const pokeApiService = new PokeApiService();

  it('deve retornar a lista de todos os tipos de pokémon', async () => {
    const typesResponse = await pokeApiService.getTypes();
    
    // Verificações
    expect(typesResponse).toBeDefined();
    expect(typesResponse.count).toBeGreaterThan(0);
    expect(typesResponse.results).toBeInstanceOf(Array);
    expect(typesResponse.results.length).toBeGreaterThan(0);
  });

  it('deve conter os tipos básicos de pokémon na lista', async () => {
    const typesResponse = await pokeApiService.getTypes();
    
    // Lista de alguns tipos básicos que devem existir
    const basicTypes = ['fire', 'water', 'grass', 'electric', 'psychic'];
    
    // Verificar se cada tipo básico está presente na lista
    basicTypes.forEach(basicType => {
      const typeExists = typesResponse.results.some(type => type.name === basicType);
      expect(typeExists).toBe(true);
    });
  });

  it('deve ter a estrutura correta para cada item na lista de tipos', async () => {
    const typesResponse = await pokeApiService.getTypes();
    
    // Verificar a estrutura de cada item na lista
    typesResponse.results.forEach(type => {
      expect(type).toHaveProperty('name');
      expect(type).toHaveProperty('url');
      expect(typeof type.name).toBe('string');
      expect(typeof type.url).toBe('string');
      expect(type.url).toMatch(/\/type\/\d+\/$/);
    });
  });
});