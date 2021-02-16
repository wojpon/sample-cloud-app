package com.wojciechponikiewski.bike.repositories;

import com.wojciechponikiewski.bike.models.Bike;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BikesRepository extends MongoRepository<Bike, String> {
}
