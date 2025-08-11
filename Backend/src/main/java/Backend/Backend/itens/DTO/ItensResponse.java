package Backend.Backend.itens.DTO;


import java.util.List;

public record ItensResponse(
        Long id,
        String nome,
        Double preco,
        Integer quantidade,
        Boolean ativo,
        List<itens_imgResponse> imagens,
        List<itens_caracteristicasResponse> caracteristicas
) {}
