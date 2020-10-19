using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Domains
{
    public partial class Curso
    {
        public Curso()
        {
            Candidato = new HashSet<Candidato>();
        }

        public int IdCurso { get; set; }
        public string NomeCurso { get; set; }
        public string TipoCurso { get; set; }

        public ICollection<Candidato> Candidato { get; set; }
    }
}
