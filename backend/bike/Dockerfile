FROM openjdk:11 as builder
WORKDIR /app
COPY . /app
RUN ./mvnw clean  package

FROM openjdk:11 as runtime
COPY --from=builder /app/target/*.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar" ]
