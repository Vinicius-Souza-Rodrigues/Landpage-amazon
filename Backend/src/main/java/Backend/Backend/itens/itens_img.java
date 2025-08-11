package Backend.Backend.itens;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "itens_img")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class itens_img {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "itens_id")
    private Itens itens_id;

    @Column(name = "url")
    private String url;
}
