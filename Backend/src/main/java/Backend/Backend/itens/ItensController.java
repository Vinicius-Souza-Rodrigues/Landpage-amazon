package Backend.Backend.itens;

import Backend.Backend.itens.DTO.ItensResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/itens")
@RequiredArgsConstructor
public class ItensController {

    private final ItensService itensService;

    @GetMapping("/todos")
    public ResponseEntity<String> pegar_itens() {
        //List<ItensResponse> itensResponse = itensService.receberTodosItens();

        return ResponseEntity.ok("teste");
    }
}
