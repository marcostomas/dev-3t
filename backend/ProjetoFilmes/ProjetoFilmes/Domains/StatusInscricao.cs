using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Domains
{
    public partial class StatusInscricao
    {
        public StatusInscricao()
        {
            Inscricao = new HashSet<Inscricao>();
        }

        public int IdStatusInscricao { get; set; }
        public string NomeStatusInscricao { get; set; }

        public ICollection<Inscricao> Inscricao { get; set; }
    }
}
