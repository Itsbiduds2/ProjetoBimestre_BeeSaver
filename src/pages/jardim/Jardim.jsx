import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import styles from './Jardim.module.css';
import PlantaCard from './PlantaCard';
import SearchBar from './SearchBar';
import * as api from '../../services/api';

const Jardim = () => {
  const [plantas, setPlantas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [formNome, setFormNome] = useState('');

  useEffect(() => {
    loadPlantas();
  }, []);

  const loadPlantas = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getPlantas();
      setPlantas(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(`Falha ao carregar plantas: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!formNome.trim()) {
      alert('Digite um nome válido.');
      return;
    }

    try {
      const newPlanta = { nome: formNome.trim() };
      const created = await api.createPlanta(newPlanta);
      setPlantas(prev => [created, ...prev]);
      setFormNome('');
      alert('Planta criada com sucesso.');
    } catch (err) {
      alert('Erro ao criar planta: ' + err.message);
    }
  };

  const handleStartEdit = (planta) => {
    setEditing(planta);
    setFormNome(planta.nome || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditing(null);
    setFormNome('');
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editing) return;

    try {
      const updated = await api.updatePlanta(editing.id, {
        ...editing,
        nome: formNome.trim(),
      });

      setPlantas(prev => prev.map(p => p.id === updated.id ? updated : p));
      setEditing(null);
      setFormNome('');
      alert('Planta atualizada com sucesso.');
    } catch (err) {
      alert('Erro ao atualizar planta: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Deseja realmente excluir esta planta?')) return;

    try {
      await api.deletePlanta(id);
      setPlantas(prev => prev.filter(p => p.id !== id));
      alert('Planta excluída.');
    } catch (err) {
      alert('Erro ao excluir: ' + err.message);
    }
  };

  const filtered = plantas.filter(p =>
    (p.nome || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <button className={styles.backBtn} onClick={() => window.history.back()}>←</button>
          <h1 className={styles.title}>Jardim</h1>
        </header>

        <SearchBar value={search} onChange={setSearch} />

        <button className={styles.meuJardimBtn}>meu jardim</button>

        <h2 className={styles.subtitulo}>Plantas</h2>

        <div className={styles.formArea}>
          <form onSubmit={editing ? handleSaveEdit : handleCreate} className={styles.form}>
            <input
              value={formNome}
              onChange={(e) => setFormNome(e.target.value)}
              placeholder="Nome da planta"
              className={styles.inputForm}
            />
            <div className={styles.formBtns}>
              <button type="submit" className={styles.primaryBtn}>
                {editing ? 'Salvar' : 'Adicionar'}
              </button>
              {editing && (
                <button type="button" className={styles.secondaryBtn} onClick={handleCancelEdit}>
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        {loading && <p>Carregando plantas...</p>}
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.lista}>
          {filtered.length === 0 && !loading ? (
            <p>Nenhuma planta encontrada.</p>
          ) : (
            filtered.map((planta) => (
              <PlantaCard
                key={planta.id ?? planta.nome}
                planta={planta}
                onEdit={() => handleStartEdit(planta)}
                onDelete={() => handleDelete(planta.id)}
              />
            ))
          )}
        </div>

      </div>
    </>
  );
};

export default Jardim;
