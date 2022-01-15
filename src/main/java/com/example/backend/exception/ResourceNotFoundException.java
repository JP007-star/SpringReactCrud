/*
 * @project SpringBoot-backend
 * @fileName ResourceNotFoundException
 * @author Jaya Prasad.M --> jaya_muthukrishnan
 * @email jaya_muthukrishnan@thbs.com
 * @date 15 01 2022 11:17 PM
 */
package com.example.backend.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    private static final long serialVersionUID=1L;

    public ResourceNotFoundException(String s) {
        super(s);
    }
}
