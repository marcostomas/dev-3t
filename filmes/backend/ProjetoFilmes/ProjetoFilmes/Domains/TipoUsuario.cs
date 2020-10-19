﻿using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Usuario = new HashSet<Usuario>();
        }

        public int IdTipoUsuario { get; set; }
        public string NomeTipoUsuario { get; set; }

        public ICollection<Usuario> Usuario { get; set; }
    }
}
