using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Domains
{
    public partial class Inscricao
    {
        public int IdInscricao { get; set; }
        public DateTime DataInscricao { get; set; }
        public int? IdCandidato { get; set; }
        public int? IdVaga { get; set; }
        public int? IdStatusInscricao { get; set; }

        public Candidato IdCandidatoNavigation { get; set; }
        public StatusInscricao IdStatusInscricaoNavigation { get; set; }
        public Vaga IdVagaNavigation { get; set; }
    }
}
