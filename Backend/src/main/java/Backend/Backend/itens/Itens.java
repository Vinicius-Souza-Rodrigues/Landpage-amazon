package Backend.Backend.itens;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "itens")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Itens {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "preco")
    private Double preco;

    @Column(name = "quantidade")
    private Integer quantidade;

    @Column(name = "ativo")
    private Boolean ativo;
}
