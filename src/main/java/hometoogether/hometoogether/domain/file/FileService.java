package hometoogether.hometoogether.domain.file;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class FileService {

    private final FileRepository fileRepository;

    @Transactional
    public Long saveFile(FileRequestDto fileDto) {
        return fileRepository.save(fileDto.toEntity()).getId();
    }

    @Transactional
    public FileResponseDto getFile(Long fileId) {
        File file = fileRepository.findById(fileId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + fileId));
        return new FileResponseDto(file);
    }
}
