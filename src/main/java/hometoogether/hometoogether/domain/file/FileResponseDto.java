package hometoogether.hometoogether.domain.file;

import lombok.Getter;

@Getter
public class FileResponseDto {
    private String origFilename;
    private String filename;
    private String filePath;

    public FileResponseDto(File entity) {
        this.origFilename = entity.getOrigFilename();
        this.filename = entity.getFilename();
        this.filePath = entity.getFilePath();
    }
}
