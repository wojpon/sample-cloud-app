package com.wojciechponikiewski.bike.controlers;

import com.wojciechponikiewski.bike.models.Bike;
import com.wojciechponikiewski.bike.repositories.BikesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:9080", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/v1")
public class BikesController {
    @Autowired
    private BikesRepository bikesRepository;

    @RequestMapping(value = "/bikes", method = RequestMethod.GET)
    public List<Bike> getAllBikes() {
        return bikesRepository.findAll();
    }

    @RequestMapping(value = "/bikes/{id}", method = RequestMethod.GET)
    public Optional<Bike> getBikeById(@PathVariable("id") String id) {
        return bikesRepository.findById(id);
    }

    @RequestMapping(value = "/bikes", method = RequestMethod.POST)
    public Bike addNewBike(@RequestBody Bike bike){
        return bikesRepository.save(bike);
    }

}
