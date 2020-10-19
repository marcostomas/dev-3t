using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Domains
{
    public partial class VagaTecnologia
    {
        public int IdTecnologia { get; set; }
        public int IdVaga { get; set; }

        public Tecnologia IdTecnologiaNavigation { get; set; }
        public Vaga IdVagaNavigation { get; set; }
    }
}
