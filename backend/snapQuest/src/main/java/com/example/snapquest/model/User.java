package com.example.snapquest.model;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class User {
    private String name;
    private String email;
    private String password;
    private int streak;
    private boolean completedDailyQuest;
    private List<File> userPhotos;

    public User(String email, String password, String name) {
        this.name = name;
        this.email = email;
        this.password = password;
        streak = 0;
        completedDailyQuest = false;
        userPhotos = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public int getStreak() {
        return streak;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void completeDailyQuest() {
        completedDailyQuest = true;
    }

    public void resetCompleteStatus() {
        completedDailyQuest = false;
    }

    public void incrementStreak() {
        streak++;
    }
    public void resetStreak() {
        streak = 0;
    }

    public boolean correctPassword(String passWordInput) {
        return password.equals(passWordInput);
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void uploadUserPhoto(File e) {
        this.userPhotos.add(e);
    }

    public void deleteUSerPhoto(File e) {
        this.userPhotos.remove(e);
    }

    public List<File> getUserPhotos() {
        return userPhotos;
    }
}

