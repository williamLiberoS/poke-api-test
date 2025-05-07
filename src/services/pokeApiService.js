const axios = require('axios');

class PokeApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://pokeapi.co/api/v2',
    });
  }

  /**
   * Obtém informações de um pokémon específico pelo ID ou nome
   * @param {string|number} idOrName - ID ou nome do pokémon
   * @returns {Promise<Object>} - Dados do pokémon
   */
  async getPokemon(idOrName) {
    const response = await this.api.get(`/pokemon/${idOrName}`);
    return response.data;
  }

  /**
   * Lista todos os tipos de pokémon
   * @returns {Promise<Object>} - Lista de tipos de pokémon
   */
  async getTypes() {
    const response = await this.api.get('/type');
    return response.data;
  }

  /**
   * Obtém informações sobre uma habilidade específica pelo ID ou nome
   * @param {string|number} idOrName - ID ou nome da habilidade
   * @returns {Promise<Object>} - Dados da habilidade
   */
  async getAbility(idOrName) {
    const response = await this.api.get(`/ability/${idOrName}`);
    return response.data;
  }
}

module.exports = PokeApiService;